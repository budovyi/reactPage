import React from "react"
import Head from "./Head"
import ReactionShare from "./ReactionShare"
import TextBlock from "./TextBlock"
import Comment from "./Comment"
import AddComment from './AddComment'

export default class Post extends React.Component{


    render(){
        return (
            <div className="default" >
                <link rel="stylesheet" href="https://dashkit.goodthemes.co/assets/fonts/feather/feather.min.css"/>
                <link rel="stylesheet" href="https://dashkit.goodthemes.co/assets/libs/highlight.js/styles/vs2015.css"/>
                <link rel="stylesheet" href="https://dashkit.goodthemes.co/assets/libs/quill/dist/quill.core.css"/>
                <link rel="stylesheet" href="https://dashkit.goodthemes.co/assets/libs/select2/dist/css/select2.min.css"/>
                <link rel="stylesheet" href="https://dashkit.goodthemes.co/assets/libs/flatpickr/dist/flatpickr.min.css"/>
                <link rel="stylesheet" href="https://dashkit.goodthemes.co/assets/css/theme.min.css" id="stylesheetLight"/>

{/*
                <link rel="stylesheet" href="https://dashkit.goodthemes.co/assets/css/theme-dark.min.css" id="stylesheetDark"/>
*/}

                <div className="card" >
                    <div className="card-body">

                        <Head />
                        <TextBlock/>
                        <ReactionShare />
                        <Comment src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-3.jpg"
                                 name="Adolfo Hess"
                                 message="Any chance you're going to link the grid up to a public gallery of sites\n
                                 built with Launchday?"/>

                        <Comment src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-2.jpg"
                                 name="Ab Hadley"
                                 message="Looking good Dianna! I like the image grid on the left, but it feels
                                like a lot to process and doesn't really show me what the
                                product does? I think using a short looping video or something similar
                                demo'ing the product might be better?"/>
                        <AddComment/>
                    </div>
                </div>





            </div>
        )
    }

}