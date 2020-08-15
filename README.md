# Jessica's Portfolio

Hello world! This repo contains an easy-to-customize personal dev portfolio template that was created with Bootstrap - HTML/CSS . It is lightweight and fully responsive, as well as comes with the Bootstrap grid system and loaded with Font Awesome. The site is static and comes production ready if you just want to add your information and go. Alternatively, you can edit styles, colours, and scripts fairly easily. The site was built as modular as possible to make it easy to shift around styles and content.

To execute this project just open `home.html` file in the browser.

To view a live demo, **[click here](https://jesslefrontend.herokuapp.com/)**.


## Features
* Fully responsive
* Comes with Bootstrap grid system
* Easy colour changes can be done through simple variable edits

## Contents
- [Setup and Configuration](#setup-and-configuration)
- [Customization and Editing](#customization-and-editing)
    - [General](#general)
    - [Images](#images)
    - [Header Section](#header-section)
    - [About Section](#about-section)
       - [Skills Section](#skills-section)
       - [Interest Section](#contact-section)
    - [Resume Section](#resume-section)
    - [Blog Section](#blog-section)
    - [Footer Section](#footer-section)
- [Contributing](#contributing)
- [License](#license)


## Setup and Configuration

If you want to use this template as it is, you just need to download the `css`, `images`, `js`, `libs` folders and the `index.html` file. Then, you would then add/modify your content to `index.html` as needed and done! You're good to go!

## Customization and Editing
Feel free to fork this project and update it with your own code and style. If you improve the app in anyway, a PR would be greatly appreciated :) 

### General
In general, most styles on the page are based off the definitions of variables in the variable section of the style sheet:

```SCSS
// Define primary and secondary colors
$primary: #17b978;
$secondary: #a0f669;

// Define primary and secondary font
$font-primary: 'Open Sans', sans-serif;
$font-secondary: 'Raleway', sans-serif;

// Define background colors
$white: #fff;
$black: #000000;
$darken: #232931;
```
If you want to change the general colour scheme of the page for example, simply change the value of $primary.

### Images
The images are stored under folder `images`. Feel free to replace with your images. 

### Header Section
The header section can be found within the `<header>` tag.

### About Section

The about section contains an image and text that can be edited by changing the text within the paragraph tags.

#### Skills
Under `About` section is the `.skills` section. 
```HTML
<div class="progress">
    <span class="skill">Skill Name<i class="val">Your skill level %</i></span>
    <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar"></div>
    </div>
</div>
```

#### Interest
Under `About` section is the `.interest` section that functions similarly to the `.skills` above. 
```HTML
<div class="progress">
    <span class="skill">CSS/Bootstrap 4<i class="val">80%</i></span>
    <div class="progress-bar-wrap">
        <div class="progress-bar" role="progressbar"></div>
    </div>
</div>
```

### Resume Section
The resume section creates a vertical timeline with all your relevant experience.
The default format is as follows:
```HTML
<div class="resume-item">
    <h4>Job Title</h4>
    <h5>Timeline</h5>
    <p><em>Employer Name, Country</em></p>
    <p>
        <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Curabitur in iaculis ex.</li>
        </ul>
    </p>
</div>
```

### Blog Section
The Blog section contains a number of `.articles` elements. You can use this `.blog` section for your `.projects` elements instead that represent each of your projects. An example is as follows:

```HTML
<div class="row">
    <div class="col-lg">
        <div class="project img d-flex align-items-end" style="background-image: url(images/img-blog-1.png);">
            <div class="overlay"></div>
            <div class="text p-4">
            <h3>
                <a href="#">Project Name Here</a>
            </h3>
              <span>Project Description</span>
        </div>
    </div>
</div>
```

## Footer 
The Footer contains my contact information in icons with hyperlinks. An example is as follows:

```HTML
 <div class="content" id="contact">
      <div class="name">Your name</div>
      <div class="email">Your email</div>
      <div class="email-sub">What you wanna say</div>
      <div class="img-list">
        <a href="#" target="_blank"><img src="images/linkedin.svg"></a>
        <a href="#" target="_blank"><img src="images/github.svg"></a>
      </div>
    </div>
```

## Contributing
Feel free to fork this project and customize with your personal info. If you implement any nice features or improvements I'd really appreciate if you could open a PR to this project ;)

## License

Completely free (MIT)! See [LICENSE.md](LICENSE.md) for more.

