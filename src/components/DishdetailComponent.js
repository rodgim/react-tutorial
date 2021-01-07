import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, ListGroup, ListGroupItem } from 'reactstrap';

class DishDetail extends Component{
    renderDish(dish) {
        return (
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle>
                        {dish.name}
                    </CardTitle>
                    <CardText>
                        {dish.description}
                    </CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments){
        if(comments != null){
            console.log("comment");
            const commentsRender = comments.map((comment) => {
                return (
                    <ListGroupItem key={comment.id}>
                        <div>
                            {comment.comment}
                        </div>
                        <div>
                            -- {comment.author} , {comment.date}
                        </div>
                    </ListGroupItem>
                );
            });
            return (
                <div>
                    <h4>Comments</h4>
                    <ListGroup>
                        {commentsRender}
                    </ListGroup>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }

    render() {
        if(this.props.dish != null){
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish.comments)}
                    </div>
                </div>
            );
        }else{
            return (
                <div></div>
            );
        }
    }
}

export default DishDetail;