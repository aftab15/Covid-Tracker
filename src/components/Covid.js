import React from 'react'

const Covid = ({info}) => {
    return (
        <>

            <div className="container-fluid">
                <h1 className="m-4 p-4">COVID-19 LIVE UPDATES</h1>
                <div className="row">
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="card bg-light">
                            <div className="card-body">
                                <h5 className="card-title"><span>Our</span> Country</h5>
                                <h6 className="card-subtitle mb-2 text-dark">India</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="card bg-success">
                            <div className="card-body">
                                <h5 className="card-title text-light"><span>Total</span> Recovered</h5>
                                <h6 className="card-subtitle mb-2 text-light">{info.recovered}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="card bg-warning">
                            <div className="card-body">
                                <h5 className="card-title"><span>Total</span> Confirmed</h5>
                                <h6 className="card-subtitle mb-2 text-dark">{info.confirmed}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="card bg-primary">
                            <div className="card-body">
                                <h5 className="card-title text-light"><span>Total</span> Active</h5>
                                <h6 className="card-subtitle mb-2 text-light">{info.active}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="card bg-danger">
                            <div className="card-body">
                                <h5 className="card-title text-light"><span>Total</span> Death</h5>
                                <h6 className="card-subtitle mb-2 text-light">{info.deaths}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className="card bg-info">
                            <div className="card-body">
                                <h5 className="card-title"><span>Last</span> Updated</h5>
                                <h6 className="card-subtitle mb-2 text-dark">{info.lastupdatedtime}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid;