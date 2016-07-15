// // require('webpack');
// var cats = require('./cats.js')

var Animation = React.createClass({
	render: function() {
		return (<div className="animation fade-in">
			Koty Wong
			<Main />
		</div>
		)
	}
})


var Main = React.createClass({
  render: function() {
    return(<div id="main">
    	<div className="learning-curve-black"> 
    		Koty Wong
    	</div>
  <div id="carousel-example-generic" className="carousel slide" data-ride="carousel" data-interval="3500">
  {/*<ol className="carousel-indicators">
    <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
  </ol>*/}


  <div className="carousel-inner" role="listbox">
    <div className="item active">
      <img src="images/test.jpg"/>
    </div>

    <div className="item">
      <img src="images/test2.jpg"/>
    </div>
     <div className="item">
      <img src="images/test3.jpg"/>
    </div>
  </div>

  <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
    <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
    <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      <Nav nav={["About", "Portfolio", "Art", "Blog", "Resume"]}/>
			<Footer />
      </div>)
  }
})

var Nav = React.createClass({
	callback: function(selection) {
		this.setState({nav: selection})
	},
	getInitialState: function() {
		return({
			nav: "About"})
	},
	getIG: function() {
		console.log('getting ig')
		$.ajax({
			url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=41281790.1677ed0.033e8892d62e4394b44bc1a9246fb33f",
			method: "get",
			dataType: "jsonp",
		}).done(function(data) {
			console.log(data);
			return data;
		})
	},
	render: function() {
		// this.getIG();
		var self = this;
		var navElements = this.props.nav.map(function(navElement) {
			// console.log(navElement)
	
			return <RenderNavElement element={navElement} callback={self.callback}/>
		})
		if (this.state.nav === "About"){
			return (<div>
				<nav className="navbar navbar-default">
				<div className="container">
					<ul className="nav navbar-nav">{navElements}</ul>
					</div>
				</nav>
				<About />
			</div>
			)
		} else if (this.state.nav === "Portfolio"){
			return (<div>
				<nav className="navbar navbar-default">
				<div className="container">
					<ul className="nav navbar-nav">{navElements}</ul>
					</div>
				</nav>
				<Portfolio />
			</div>
			)
		} else if (this.state.nav === "Blog"){
			return (<div>
				<nav className="navbar navbar-default">
				<div className="container">
					<ul className="nav navbar-nav">{navElements}</ul>
					</div>
				</nav>
				<Blog />
			</div>
			)
		} else if (this.state.nav === "Art"){
			return (<div>
				<nav className="navbar navbar-default">
				<div className="container">
					<ul className="nav navbar-nav">{navElements}</ul>
					</div>
				</nav>
				<Art />
			</div>
			)
		} else if (this.state.nav === "Resume"){
			return (<div>
				<nav className="navbar navbar-default">
				<div className="container">
					<ul className="nav navbar-nav">{navElements}</ul>
					</div>
				</nav>
				<Resume />
			</div>
			)
		} 
	}
})

var RenderNavElement = React.createClass({
	callback: function() {
		console.log(this.props.element)
		if (this.props.element == "Resume") {
			console.log('waaa"')
			window.location.assign("/resume");
		} else if (this.props.element == "Blog") {
			window.location.assign("https://kotyblog.herokuapp.com/")
		} else {
			this.props.callback(this.props.element);
		}
	},
	render: function() {
		return (
			<li onClick={this.callback}><a>{this.props.element}</a></li>
		)
	}
})

var About = React.createClass({
	// getIG: function() {
	// 	console.log('getting ig')
	// 	$.ajax({
	// 		url: "https://api.instagram.com/v1/users/self/media/recent/?access_token=41281790.1677ed0.033e8892d62e4394b44bc1a9246fb33f",
	// 		method: "get",
	// 		dataType: "jsonp",
	// 	}).done(function(data) {
	// 		console.log(data);
	// 		return  data;
	// 	})
	// },
	getInitialState: function() {
		return ({ig: null})
	},
	componentDidMount: function() {
		$.ajax({
			url: "/instagram",
			method: "get"
			// dataType: "jsonp",
		}).done(function(data) {
			console.log(data);
			// return data;
			this.setState({ig: data})
		}.bind(this));
	},
	render: function() {
		// var igData = this.getIG();
		console.log(this.props.igData)
		return (<div className="about layout-grey">
			<div className="row">
				<div className="col-lg-12">
					<h1 className="text-center learning-curve">Anything is possible, you gotta dream like you never seen obstacles</h1>
					<h3 className="text-center">- J. Cole </h3>
				</div>
			</div>
			<div className="row top-buffer">
				<div className="col-md-8">
					<p>Thanks for making it to the first iteration of my profile site! I'm currently finishing
					up my web development immersive course at General Assembly and I've made this site along with
					many other <strong>projects</strong> during my 12 week course!</p>
					
					<p>In that time I've learned Javascript, HTML, CSS, Ruby, Ruby on Rails, Node.js, React, Mongo, SQL,
					and many other <strong>technologies.</strong></p>

					<p>Outside of the programming/technology realm, I try to engage in as many things as life has
					to offer. To dive into more detail from that vague statement, my free time is usually spent developing
					relationships, powerlifting, indulging in the world's finest foods, venturing to unknown territories, 
					creating music, and learning. Of course though, life has many more things to offer than the usually activities
					I partake in, thus I keep an open mind in trying new things.</p>
					{console.log(this.state.ig)}
				
	
				</div>
				<div className="profile-pic col-md-4">
					<img src="/images/koty.jpg"/>
				</div>
				<div className="row">
					<div className="col-md-12">

					<p>I'm always open to ideas, collaborations and meeting new people, so if you're a cool person,
					feel free to hit me up in the social media links below!</p>

					{(this.state.ig != null ? <RenderInsta igData={this.state.ig.data}/> : "goodbye")}
					</div>
				</div>
			</div>
		</div>)
	}
})

var RenderInsta = React.createClass({
	render: function() {
		// console.log(this.props.igData)
		var igElements = this.props.igData.map(function(ig){
			console.log(ig)
				if (ig.videos != null) {
					return  <div className="col-md-3">
						<video className="border-son" width="200" height="200" controls>
	  					<source src={ig.videos.standard_resolution.url} type="video/mp4"/>
						</video>
					</div>
				} else { 
					return <div className="col-md-3">
						<img className="border-son" src={ig.images.standard_resolution.url} />
					</div>
				}
			})
		return (<div className="row">
				<h3 className="text-center"> Instagram </h3>
					{igElements}
			</div>)
	}
})

var Blog = React.createClass({
	render: function() {
		return (<div>
			<div className="row">
				<div className="col-md-4 col-md-offset-1">
					blog
				</div>
			</div>
		</div>)
	}
})

var Portfolio = React.createClass({
	render: function() {
		return (<div className="row layout-grey">
			<div className="col-md-4 col-md-offset-1">
			Portfolio
			</div>
			</div>)
	}
})

var Art = React.createClass({
	render: function() {
		return (<div className="layout-grey-art">
			<h1 className="text-center learning-curve">Photography</h1>
			<div className="text-center">
				<img src="https://c6.staticflickr.com/9/8673/28310770005_c597a291fa_b.jpg" width="500" height="240" alt="mallorca" />
			</div>
			<h1 className="text-center learning-curve">Travel</h1>
			<div className="text-center">
				<iframe width="500" height="240" src="https://www.youtube.com/embed/_lsACEYeCQ4" frameborder="0" allowfullscreen></iframe>
			</div>
			<h1 className="text-center learning-curve">Music</h1>
			<div className="text-center">
				<iframe width="500" height="240" src="https://www.youtube.com/embed/wsMLkAyOzyw?list=PLrgP_C0J_rt8qkQFH1ySWX70MgrgGbuJs" frameborder="0" allowfullscreen></iframe>
			</div>
			</div>)
	}
})

var Resume = React.createClass({
	render: function() {
		return (<div>
			Resume</div>)
	}
})

var Footer = React.createClass({
	render: function() {
		return (<div className="footer">
			<div className="row">
				<div className="col-xs-1">
					<a href="mailto:wongkoty@gmail.com" className="social">e</a>
				</div>
				<div className="col-xs-1">
					<a href="https://www.linkedin.com/in/wongkoty" className="icon-linkedin social">l</a>
				</div>
				<div className="col-xs-1">
					<a href="http://www.github.com/wongkoty" className="social">g</a>
				</div>
				<div className="col-xs-1">
					<a href="http://www.instagram.com/wongkoty" className="social">i</a>
				</div>

			</div>
		</div>)
	}
})

ReactDOM.render(<Main />,
	document.getElementById('container'));
