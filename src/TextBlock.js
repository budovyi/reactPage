import React from "react"

export default class TextBlock extends React.Component {
    render() {
        return (
            <div>
                <p className="mb-3">
                    I've been working on shipping the latest version of Launchday. The story I'm trying to focus
                    on is something like "You're launching soon and need to be 100% focused on your product.
                    Don't lose precious days designing, coding, and testing a product site. Instead, build one
                    in minutes."
                </p>

                <p className="mb-4">
                    What do you y'all think? Would love some feedback from <a href="#!"
                                                                              className="badge badge-soft-primary">@Ab</a> or <a
                    href="#!" className="badge badge-soft-primary">@Adolfo</a>?
                </p>

                <p className="text-center mb-3">
                    <img src="https://dashkit.goodthemes.co/assets/img/posts/post-1.jpg" alt="..." className="img-fluid rounded"/>
                </p>
            </div>
        )
    }
}