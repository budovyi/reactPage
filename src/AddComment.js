import React from "react"

export default class AddComment extends React.Component{

    render() {
        return (
            <div className="row align-items-start">
                <div className="col-auto">

                    <div className="avatar">
                        <img src="https://dashkit.goodthemes.co/assets/img/avatars/profiles/avatar-1.jpg" alt="..."
                             className="avatar-img rounded-circle"/>
                    </div>

                </div>
                <div className="col ml-n2">

                    <form>
                        <label className="sr-only">Leave a comment...</label>
                        <textarea className="form-control" placeholder="Leave a comment"
                                  rows="2"></textarea>
                    </form>

                </div>
            </div>
        );
    }
}