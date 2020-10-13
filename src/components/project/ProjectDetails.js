import React from 'react'

const ProjectDetails = (props) => {

    const id = props.match.params.id;

    return (

        <div className="container section project-details">

            <div className="card z-depth-0">
                <div className="card-title">
                    <span className="card-title">Project Title - {id}</span>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tempore vero, inventore cum eius, sint commodi eaque quisquam aliquam accusantium temporibus necessitatibus id quis recusandae quos velit delectus perferendis similique. </p>
                </div>

                <div className="card-action gret lighten-4 grey-text">
                    <div> Posted by the net ninja </div>
                    <div> October 13, 2am </div>
                </div>
            </div>
            
        </div>
    )
}

export default ProjectDetails
