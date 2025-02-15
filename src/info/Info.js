import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ahmad",
    lastName: "Ilham",
    initials: "ai", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Engineer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in the ID'
        },
        {
            emoji: "💼",
            text: "Software Engineer at <a href='https://gueecosystem.com/' target='_blank'>GUE</a>"
        },
        {
            emoji: "📧",
            text: "aailham007@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://wa.me/6282110050655",
        //     icon: "fa fa-whatsapp",
        //     label: 'whatsapp'
        // },
        {
            link: "https://www.linkedin.com/in/a-ilham15",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/ahmdilhaam",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.facebook.com/ahmad.ilham1505",
            icon: 'fa fa-facebook',
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/hi_ailham",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
    ],
    bio: "Hello! I'm Ilham. I'm a Software Engineer for GUE. I'm studying at STT Terpadu Nurul Fikri. I am a fan of technology, programming, and photography. That's why, you should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'git', 'github', 'gitlab', 'bitbucket', 'bootstrap', 'html5', 'nodejs', 'php', 'sql', 'codeigniter', 'laravel'],
            exposedTo: ['reactjs', 'nextjs', 'css3', 'redis', 'mongodb']
        }
    ,
    works: [
        {
            company: '• PT Global Urban Essensial',
            duration: 'Jan 2020 - Present'
        },
        {
            company: '• PT Alumagubi Raya Indonesia',
            duration: 'Sep 2018 - Dec 2019'
        },
        {
            company: '• ICON+ (Intern)',
            duration: 'Apr 2018 - September 2018'
        },
        {
            company: '• PT PLN TJBB (Intern)',
            duration: 'Jan 2017 - Mar 2017'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Teman Diabetes",
            live: "https://temandiabetes.com", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Teman Bumil",
            live: "https://www.temanbumil.com",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "D2D (Doctor to Doctor)",
            live: "https://www.d2d.co.id",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Singtel IoT Sense",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Aminef ~ Portal Database Alumni",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Notariat PPJKN",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Desain Industri",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Dashboard Monitoring Kuasa Kerja",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}