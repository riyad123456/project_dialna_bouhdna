import logo from './logo.svg';
import Table from 'react-bootstrap/Table'

import Thead from './Thead.js'
import Tbody from './Tbody.js'

function DB_table(props) {
    return (
        <div>
            <section id="table" class="fwh-slide1">
        <div class="row">
            <div class="col-lg-7 mx-auto">
                <div class="card border-0 shadow">
                    <div class="card-body p-5">

                        
                        <div class="table-responsive">
                            <table class="table m-0">
                                <Thead />
                                <Tbody />
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
}

export default DB_table;