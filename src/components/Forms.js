import React from 'react';
import Form from 'react-bootstrap/Form';
import Main from './Main';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            select: "0"
        }
    }

    handleSelect = (e) => {
        e.preventDefault();
        this.setState({
            select: e.target.value,
        });
    };

    sel1(e) {
        this.setState({
            select: e.target.value
        });
    }

    sel2(e) {
        this.setState({
            select: e.target.value
        });
    }

    sel3(e) {
        this.setState({
            select: e.target.value
        });
    }

    sel4(e) {
        this.setState({
            select: e.target.value
        });
    }

    render() {
        let newMain;
        if (this.state.select === "1") {
            newMain = (<Main Num={this.state.select} Data={this.props.Data1} />
            );
        } else if (this.state.select === "2") {
            newMain = (<Main Num={this.state.select} Data={this.props.Data2} />
            );
        } else if (this.state.select === "3") {
            newMain = (<Main Num={this.state.select} Data={this.props.Data3} />
            );
        } else if (this.state.select === "4") {
            newMain = (<Main Num={this.state.select} Data={this.props.Data4} />
            );
        } else {
            newMain = (<Main Num={this.state.select} Data={this.props.Data5} />
            );
        }

        return (
            <>
                <Form style={{ width: "500px", margin: "40px" }} >
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="select">Filter</Form.Label>
                        <Form.Select onChange={this.handleSelect}>
                            <option value="0">Please Choose Number Of Horns</option>
                            <option value="1" onClick={this.sel1}>One</option>
                            <option value="2" onClick={this.sel2}>Two</option>
                            <option value="3" onClick={this.sel3}>Three</option>
                            <option value="4" onClick={this.sel4}>More...</option>
                        </Form.Select>
                    </Form.Group>
                </Form>
                {newMain}

            </>
        )
    }
}

export default Forms;