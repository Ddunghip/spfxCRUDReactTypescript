import '@progress/kendo-theme-default/dist/all.css';
import {
    Grid,
    GridColumn as Column,
    GridDetailRow,

} from "@progress/kendo-react-grid";
import * as React from 'react';

export default class DetailComponent extends GridDetailRow {

    public render() {
        const dataItem = this.props.dataItem;
        console.log("check dataItem", this.props, dataItem);
        return (

            <section>
                <p>
                    {console.log(">>>here")}
                    <strong>Title:</strong> {dataItem.EmployeeName} units
                </p>
            </section>
        );
    }
}