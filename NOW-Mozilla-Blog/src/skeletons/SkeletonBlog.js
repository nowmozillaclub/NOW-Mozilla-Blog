import React from 'react';
import { Skeleton } from '@material-ui/lab';
import { PostContainer } from '../components/Post';
import { AuthorDetails } from "../components/Post/Author";


const SkeletonBlog = () => {
    return (
        <PostContainer>
            <Skeleton animation="wave" height={15} width="30%" style={{ marginBottom: "40px" }} />

            <Skeleton animation="wave" height={30} width="80%" style={{ display: "inline-block" }} />
            <div>
                <AuthorDetails>
                    <Skeleton animation="wave" variant="circle" width={60} height={60} style={{margin: "0px 10px"}}/>
                    <div>
                        <Skeleton animation="wave" height={10} style={{ width: "20vw" }} />
                        <Skeleton animation="wave" height={10} style={{ width: "10vw" }} />
                    </div>
                </AuthorDetails>
            </div>
            <div className="divider" style={{margin:"20px 0"}}></div>

            {/* body here */}
            <Skeleton animation="wave" variant="rect" style={{height: "200px", margin: "10px auto", borderRadius: "12px"}} />
            <React.Fragment>
                <Skeleton animation="wave" height={15} width="90%" style={{ margin: "0px auto" }} />
                <Skeleton animation="wave" height={15} width="90%" style={{ margin: "0px auto" }} />
                <Skeleton animation="wave" height={15} width="90%" style={{ margin: "0px auto" }} />
                <Skeleton animation="wave" height={15} width="90%" style={{ margin: "0px auto" }} />
                <Skeleton animation="wave" height={15} width="90%" style={{ margin: "0px auto" }} />
            </React.Fragment>
        </PostContainer>
    )
}

export default SkeletonBlog
