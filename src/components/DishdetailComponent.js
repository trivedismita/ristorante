import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

    function RenderDish({dish}) {
        return(
            <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg with="100%" src={dish.image} alt={dish.name}></CardImg>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

    function RenderComments({comments}) {
        const comment = comments.map(commentDetails => 
            <div key={commentDetails.id}>
                <p>{commentDetails.comment}</p>
                <p>{commentDetails.author}</p>
            </div>
        );

        return(
            <div className="col-12 col-md-5 mt-1">
                <h4>Comments</h4>
                {comment}
            </div>
        );
    }


const Dishdetail = (props) => {
    if(props.dish != null) {
        return(
            <div className="container">
               <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                    <div className="row">
                        <RenderDish dish={props.dish} />
                        <RenderComments comments={props.comments} />
                    </div>
            </div>
        );  
    } else {
        return(
            <div></div>
        );
    }    
}

export default Dishdetail;