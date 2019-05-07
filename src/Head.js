import React from "react"

export default class Head extends React.Component{
    render() {
        return (
            <div className="mb-3">
                <div className="row align-items-center">
                    <div className="col-auto">

                        <a href="#!" className="avatar">
                            <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" alt="..."
                                 className="avatar-img rounded-circle"/>
                        </a>

                    </div>
                    <div className="col ml-n2">

                        <h4 className="card-title mb-1">
                            Dianna Smiley
                        </h4>

                        <p className="card-text small text-muted">
                            <span className="fe fe-clock"></span>
                            <time dateTime="2018-05-24">4hr ago</time>
                        </p>

                    </div>
                    <div className="col-auto">

                        <div className="dropdown">
                            <a href="#!" className="dropdown-ellipses dropdown-toggle" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a href="#!" className="dropdown-item">
                                    Action
                                </a>
                                <a href="#!" className="dropdown-item">
                                    Another action
                                </a>
                                <a href="#!" className="dropdown-item">
                                    Something else here
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        )
    }
}
