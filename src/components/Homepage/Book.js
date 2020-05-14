import React from 'react';
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, CardLink } from "reactstrap";
import {StyledBookCard} from "./BookStyles";
import {Link} from "react-router-dom";

const Book = (props) => {
    const {imageUrl, rating, title, id,review,url} = props;
    return (
            <StyledBookCard>
                <CardImg top width="100%" src={imageUrl} alt={title} />
                <CardBody>
                    <CardText>
                        <strong>{`${rating} / 5`}</strong>
                    </CardText>
                    <CardText>
                        {title}
                    </CardText>
                    <CardLink>
                        Details
                    </CardLink>
                    <CardLink>
                        <Link to={`/edit-book/${id}`}>Edit Book</Link>
                    </CardLink>
                    <CardText>
                       Review: {review}
                    </CardText>
                    <CardLink>
                        <a target="_blank" rel="noopener noreferrer" href ={url} > Good Read Link: </a>
                    </CardLink>
                </CardBody>
            </StyledBookCard>
    );
};

export default Book;