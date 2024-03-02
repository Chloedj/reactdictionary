import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Images.css";


export default function Images(props) {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (props.data && props.data.word) {
            const imageKeyword = props.data.word;
            const imageApiKey = "ab6f607t41943e02220ae3724eo64aeb";
            const imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${imageKeyword}&key=${imageApiKey}`;

            axios.get(imageApiUrl).then(response => {
                const fetchedImages = response.data.photos; 
                setImages(fetchedImages);
            });
        }
    }, [props.data]); 

    return (
        <section>
        <div className="container mt-4">
            <div className="row">
                {images.map((image, index) => (
                    <div key={index} className="col-12 col-sm-4 col-lg-4 mb-4 image">
                        <a href={image.src.original} target="_blank" rel="noopener noreferrer">
                            <img src={image.src.landscape} alt={image.alt} className="img-fluid" />
                        </a>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}
