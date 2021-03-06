import  React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './AdminPage.css';
import AddToBlog from './subAdminComponents/AddToBlog/AddToBlog';
import AddToMedia from "./subAdminComponents/AddToMedia/AddToMedia";
import ViewOrders from "./subAdminComponents/ViewOrders/ViewOrders";
import RemoveBlog from "./subAdminComponents/RemoveFromBlog/removeblog";
import RemoveMedia from "./subAdminComponents/RemoveFromMedia/removemedia";
import axios from 'axios';

class AdminPage extends Component {
    componentWillMount() {
        console.log("mounting")
        axios.get('/api/auth')
            .then(response => {
                if (!response.data) {
                    this.props.history.push('/admin')
                }
            })
            .catch(err => {
                console.error(err)
            })
    }

    render() {
        return (
            <div>
                <AddToBlog/>
                <hr/>
                <AddToMedia/>
                <hr/>
                <ViewOrders/>
                <hr/>
                <RemoveBlog/>
                <hr/>
                <RemoveMedia/>
            </div>
        )
    }
}
export default withRouter(AdminPage)
