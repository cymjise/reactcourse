import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import picture from "../../../static/assets/image/auth/auth-img.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div className="left-column" style={{
              background: "url(" + picture + ") no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }} />

            <div className="right-column">
                <h1>Contact Me</h1>

                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">
                            555-555-5555
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">
                            123456789@123.com
                        </div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-location-dot" />
                        </div>

                        <div className="text">
                            Salt Lake City, Utah
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}