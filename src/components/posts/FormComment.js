import React ,{Component} from "react";
import Container from "@material-ui/core/Container";
import InsertPhotoRoundedIcon from '@material-ui/icons/InsertPhotoRounded';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from "@material-ui/core/Icon";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import CardHeader from "@material-ui/core/CardHeader";
import {addComment} from "../../services/postApi";


const FormComment = (props) =>  {
    const [content, setContent] = React.useState("");
    console.log(props.postId);
    const dispatch = useDispatch();

    const userList = useSelector((state) => state.user);
    const userInfoId = useSelector((state) => state.auth.userInfo.id);
    const username = useSelector((state) => state.auth.userInfo.username);

    const handleSubmit = (event/*values, actions*/) => {
        event.preventDefault();

        dispatch(addComment(props.postId,content));

        setContent("");

        window.alert("Success create comment");
        window.location.reload();

    };

    const showAvatar = function () {
        if (userList[userInfoId] !== undefined ){
            return [
                <Avatar alt="Carlos"
                        src={userList[userInfoId].photos[0].url}
                />
            ];
        }else {
            return [
                <Avatar alt="Carlos"
                    // src={userList[userInfoId].photos[0].url}
                />
            ];
        }

    }

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <div className="card light-blue lighten-3">
                    <div className="card-content black-text">
                        <CardHeader

                            avatar={
                                showAvatar()
                            }

                            subheader={
                                <Link to={'/profile/'+userInfoId}>{username}</Link>
                            }

                        />

                        <div className="row">
                                            <textarea className="materialize-textarea"
                                                      name="content"
                                                      label="Content"
                                                      onChange={event => setContent(event.target.value)}
                                            ></textarea>
                        </div>
                    </div>
                    <div className="card-action">
                        <div className="row">

                            <input className="btn light-red accent-1 right"   type="submit"
                                   value="Create comment" />

                        </div>
                    </div>
                </div>
            </form>
        </Container>
    );
}
export default FormComment