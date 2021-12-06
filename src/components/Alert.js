import React from 'react'

export default function Alert(props) {
    return (
        // to prevent error ="cannot read property of null " we need to use "props.alert &&" the end operator will ensure that 2nd argument that is div wala is read only when prop.alert!= false   
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert" >
            <strong>{props.alert.type.toUpperCase()}</strong> : {props.alert.msg}
        </div >
    )
}
