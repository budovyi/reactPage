import React from "react"

export default class ReactionShare extends React.Component{
    render() {
        return (
            <div className="mb-3">
                <div className="row">
                    <div className="col">

                        <a href="#!" className="btn btn-sm btn-white">
                            �� 1
                        </a>
                        <a href="#!" className="btn btn-sm btn-white">
                            �� 2
                        </a>
                        <a href="#!" className="btn btn-sm btn-white">
                            Add Reaction
                        </a>

                    </div>
                    <div className="col-auto mr-n3">

                        <div className="avatar-group d-none d-sm-flex">
                            <a href="profile-posts.html" className="avatar avatar-xs">
                                <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-2.jpg" alt="..."
                                     className="avatar-img rounded-circle"/>
                            </a>
                            <a href="profile-posts.html" className="avatar avatar-xs">
                                <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-3.jpg" alt="..."
                                     className="avatar-img rounded-circle"/>
                            </a>
                            <a href="profile-posts.html" className="avatar avatar-xs">
                                <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-4.jpg" alt="..."
                                     className="avatar-img rounded-circle"/>
                            </a>
                            <a href="profile-posts.html" className="avatar avatar-xs">
                                <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-5.jpg" alt="..."
                                     className="avatar-img rounded-circle"/>
                            </a>
                        </div>

                    </div>
                    <div className="col-auto">

                        <a href="#!" className="btn btn-sm btn-white">
                            Share
                        </a>

                    </div>
                </div>

            </div>
        )
    }
}