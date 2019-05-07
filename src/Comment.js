import React from "react"

export default class Comment extends React.Component{
    constructor(){
        super()
        this.state = {
            src: "",
            name: "",
            message:""
        }

    }


    render() {
        return (
            <div className="comment mb-3">
                <div className="row">
                    <div className="col-auto">

                        <a className="avatar" href="profile-posts.html">

                            <img src={this.props.src} alt="..."
                                 className="avatar-img rounded-circle"/>
                        </a>

                    </div>
                    <div className="col ml-n2">

                        <div className="comment-body">

                            <div className="row">
                                <div className="col">

                                    <h5 className="comment-title">
                                        Ab Hadley
                                    </h5>

                                </div>
                                <div className="col-auto">

                                    <time className="comment-time">
                                        11:12
                                    </time>

                                </div>
                            </div>


                            <p className="comment-text">
                                {this.props.message}
                            </p>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}