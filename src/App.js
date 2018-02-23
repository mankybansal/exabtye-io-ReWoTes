import React, {Component} from 'react';
import * as THREE from 'three';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import {
    faCamera,
    faSearchPlus,
    faColumns,
    faSearchMinus,
    faExpand,
    faExpandArrowsAlt,
    faPause,
    faCube,
    faAsterisk,
    faPlay,
    faAngleDown,
    faBars,
    faStop,
    faCode,
    faEye,
    faTimes,
    faRedo,
    faPlus,
    faDownload
} from '@fortawesome/fontawesome-free-solid'
import OrbitControls from 'three-orbitcontrols';
import logo from './exabtye-logo.png';
import manky from './manky.jpg';
import './App.css';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const listItems = numbers.map((number) =>
    <div className="App-editor-code-lines-num" key={number}>{number}</div>
);

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            viewerRotate: true,
            resetRotate: false,
            zoomIn: false,
            zoomOut: false,
            boundingBox: true,
            axes: true
        };

        this.rotateHandler = this.rotateHandler.bind(this);
        this.resetRotateHandler = this.resetRotateHandler.bind(this);
        this.zoomInHandler = this.zoomInHandler.bind(this);
        this.zoomOutHandler = this.zoomOutHandler.bind(this);
        this.toggleBoundHandler = this.toggleBoundHandler.bind(this);
        this.toggleAxesHandler = this.toggleAxesHandler.bind(this);
    }

    rotateHandler(e) {
        e.preventDefault();
        this.resetStates();
        this.setState({
            viewerRotate: !this.state.viewerRotate
        });
    }

    toggleBoundHandler(e) {
        e.preventDefault();
        this.resetStates();
        this.setState({
            boundingBox: !this.state.boundingBox
        });
    }

    toggleAxesHandler(e) {
        e.preventDefault();
        this.resetStates();
        this.setState({
            axes: !this.state.axes
        });
    }

    resetStates(){
        this.setState({
            resetRotate: false,
            zoomIn: false,
            zoomOut: false,
        })
    }

    resetRotateHandler(e) {
        e.preventDefault();
        this.setState(state => ({
            resetRotate: true,
            viewerRotate: false,
            zoomIn: false,
            zoomOut: false
        }));
    }

    zoomInHandler(e) {
        e.preventDefault();
        this.setState(state => ({
            resetRotate: false,
            zoomIn: true,
            zoomOut: false
        }));
    }

    zoomOutHandler(e) {
        e.preventDefault();
        this.setState(state => ({
            resetRotate: false,
            zoomIn: false,
            zoomOut: true
        }));
    }


    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <div className="nav"><FontAwesomeIcon icon={faBars}/></div>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <div className="App-location">Material Developer</div>

                    <div className="layout-toggle">
                        Code Split &nbsp;&nbsp;<FontAwesomeIcon icon={faColumns}/> &nbsp;&nbsp;
                        <FontAwesomeIcon icon={faAngleDown}/>
                    </div>

                    <div className="App-avatar">
                        <div className="App-avatar-text"> Mayank Bansal &nbsp; <FontAwesomeIcon icon={faAngleDown}/>
                        </div>

                        <div className="App-avatar-img">
                            <img className="avatar-img" src={manky}/>
                        </div>
                    </div>


                </div>

                <div className="App-spacer"/>

                <div className="App-menu">
                    <div className="App-menu-item">
                        <u>F</u>ile
                    </div>
                    <div className="App-menu-item">
                        <u>E</u>dit
                    </div>
                    <div className="App-menu-item">
                        <u>V</u>iew
                    </div>
                    <div className="App-menu-item">
                        <u>I</u>nspect
                    </div>
                    <div className="App-menu-item">
                        Si<u>m</u>ulations
                    </div>
                    <div className="App-menu-item">
                        <u>S</u>ettings
                    </div>
                    <div className="App-menu-item">
                        <u>H</u>elp
                    </div>

                </div>

                <div className="App-editor-container">

                    <div className="App-editor-code">
                        <div className="container-title">
                            <FontAwesomeIcon icon={faCode}/>&nbsp;&nbsp;&nbsp;Source Editor (benzene.xyz)
                        </div>
                        <div className="App-editor-code-lines">
                            <div>{listItems}</div>
                        </div>
                        <div className="App-editor-code-text">
                            <pre>
                            12<br/>
                            benzene example<br/>
                            C        0.00000        1.40272        0.00000<br/>
                            H        0.00000        2.49029        0.00000<br/>
                            C       -1.21479        0.70136        0.00000<br/>
                            H       -2.15666        1.24515        0.00000<br/>
                            C       -1.21479       -0.70136        0.00000<br/>
                            H       -2.15666       -1.24515        0.00000<br/>
                            C        0.00000       -1.40272        0.00000<br/>
                            H        0.00000       -2.49029        0.00000<br/>
                            C        1.21479       -0.70136        0.00000<br/>
                            H        2.15666       -1.24515        0.00000<br/>
                            C        1.21479        0.70136        0.00000<br/>
                            H        2.15666        1.24515        0.00000<br/>
                            </pre>
                        </div>
                    </div>
                    <div className="App-editor-view">

                        <div className="container-title-2">
                            <FontAwesomeIcon icon={faEye}/>&nbsp;&nbsp;&nbsp;Visual Editor
                        </div>

                        <ObjectViewer
                            viewerRotate={this.state.viewerRotate}
                            zoomIn={this.state.zoomIn}
                            zoomOut={this.state.zoomOut}
                            resetRotate={this.state.resetRotate}
                            boundingBox={this.state.boundingBox}
                            axes={this.state.axes}
                        />

                        <div className="compound-details">C<sub>6</sub>H<sub>6</sub></div>

                    </div>

                    <div className="viewer-controls">
                        <div className="viewer-ctrl">
                            <FontAwesomeIcon icon={faExpand}/>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                        <div onClick={this.toggleAxesHandler} className="viewer-ctrl">
                            {this.state.axes ? <FontAwesomeIcon icon={faAsterisk} className="ctrlActive"/> :
                                <FontAwesomeIcon icon={faAsterisk}/>}
                        </div>
                        <div onClick={this.toggleBoundHandler} className="viewer-ctrl">
                            {this.state.boundingBox ? <FontAwesomeIcon icon={faCube} className="ctrlActive"/> :
                                <FontAwesomeIcon icon={faCube}/>}
                        </div>
                        <div onClick={this.resetRotateHandler} className="viewer-ctrl">
                            <FontAwesomeIcon icon={faExpandArrowsAlt}/>
                        </div>

                        <div className="viewer-ctrl">
                            <FontAwesomeIcon icon={faCamera}/>
                        </div>

                        <div onClick={this.rotateHandler} className="viewer-ctrl">
                            {this.state.viewerRotate ? <FontAwesomeIcon icon={faPause} className="ctrlActive"/> :
                                <FontAwesomeIcon icon={faPlay}/>}
                        </div>
                        <div onClick={this.zoomInHandler} className="viewer-ctrl">
                            <FontAwesomeIcon icon={faSearchPlus}/>
                        </div>
                        <div onClick={this.zoomOutHandler} className="viewer-ctrl">
                            <FontAwesomeIcon icon={faSearchMinus}/>
                        </div>
                    </div>

                </div>

                <div className="App-terminal">
                    <div className="App-terminal-controls">
                        <div className="App-terminal-ctrl">
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                        <div className="App-terminal-ctrl">
                            <FontAwesomeIcon icon={faStop}/>
                        </div>
                        <div className="App-terminal-ctrl">
                            <FontAwesomeIcon icon={faTimes}/>
                        </div>
                        <div className="App-terminal-ctrl">
                            <FontAwesomeIcon icon={faRedo}/>
                        </div>
                        <div className="App-terminal-ctrl">
                            <FontAwesomeIcon icon={faDownload}/>
                        </div>
                    </div>
                    <div className="App-terminal-container">
                        <div className="App-terminal-input">
                            <div className="prompt">exabyte-io/demo $</div>
                            <div className="Blinker">|</div>
                        </div>
                    </div>

                    <div className="compute-usage">
                        CPU Usage
                    </div>
                </div>


            </div>
        );
    }
}

class ObjectViewer extends Component {
    constructor(props) {
        super(props);
        this.start = this.start.bind(this);
        this.stop = this.stop.bind(this);
        this.animate = this.animate.bind(this);
    }

    componentDidMount() {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            width / height,
            0.1,
            1000
        );
        const renderer = new THREE.WebGLRenderer({antialias: true});


        let atom = {
            atomCount: 12,
            comment: "benzene example",
            atoms: [
                {
                    element: "C",
                    x: "0.00000",
                    y: "1.40272",
                    z: "0.00000"
                },
                {
                    element: "H",
                    x: "0.00000",
                    y: "2.49029",
                    z: "0.00000"
                },
                {
                    element: "C",
                    x: "-1.21479",
                    y: "0.70136",
                    z: "0.00000"
                },
                {
                    element: "H",
                    x: "-2.15666",
                    y: "1.24515",
                    z: "0.00000"
                },
                {
                    element: "C",
                    x: "-1.21479",
                    y: "-0.70136",
                    z: "0.00000"
                },
                {
                    element: "H",
                    x: "-2.15666",
                    y: "-1.24515",
                    z: "0.00000"
                },
                {
                    element: "C",
                    x: "0.00000",
                    y: "-1.40272",
                    z: "0.00000"
                },
                {
                    element: "H",
                    x: "0.00000",
                    y: "-2.49029",
                    z: "0.00000"
                },
                {
                    element: "C",
                    x: "1.21479",
                    y: "-0.70136",
                    z: "0.00000"
                },
                {
                    element: "H",
                    x: "2.15666",
                    y: "-1.24515",
                    z: "0.00000"
                },
                {
                    element: "C",
                    x: "1.21479",
                    y: "0.70136",
                    z: "0.00000"
                },
                {
                    element: "H",
                    x: "2.15666",
                    y: "1.24515",
                    z: "0.00000"
                }
            ]
        };

        let cubes = [];
        let material = null;
        let geometry = null;
        let group = new THREE.Group();

        for (let i = 0; i < atom.atomCount; i++) {

            let defcolor = 0x00ff00;
            let defgeometry = 0.5;
            switch (atom.atoms[i].element) {
                case "C":
                    defcolor = 0xFFFFFF;
                    defgeometry = 0.5;
                    break;
                case "H":
                    defcolor = 0xfff0000;
                    defgeometry = 0.35;
                    break;
                case "O":
                    defcolor = 0xff0000;
                    break;

            }

            geometry = new THREE.SphereBufferGeometry(defgeometry, 50, 50);
            material = new THREE.MeshBasicMaterial({color: defcolor});
            cubes[i] = new THREE.Mesh(geometry, material);
            cubes[i].position.set(atom.atoms[i].x, atom.atoms[i].y, atom.atoms[i].z);
            group.add(cubes[i]);
        }

        //create a group and add the two cubes
        //These cubes can now be rotated / scaled etc as a group

        const edges = new THREE.EdgesGeometry(new THREE.BoxBufferGeometry(5, 5, 5));
        const boundingBox = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({color: 0xffffff}));
        boundingBox.name = "boundingBox";

        const axesHelper = new THREE.AxesHelper(5);
        axesHelper.position.set(0, 0, 0);
        axesHelper.name = "axesHelper";

        group.add(boundingBox);
        scene.add(group);
        scene.add(axesHelper);

        camera.position.z = 8;

        renderer.setClearColor('#111111');
        renderer.setSize(width, height);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.update();

        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
        this.cube = group;
        this.axes = axesHelper;
        this.controls = controls;

        this.mount.appendChild(this.renderer.domElement);
        this.start()
    }

    componentWillUnmount() {
        this.stop();
        this.mount.removeChild(this.renderer.domElement)
    }

    start() {
        if (!this.frameId)
            this.frameId = requestAnimationFrame(this.animate)
    }

    stop() {
        cancelAnimationFrame(this.frameId)
    }

    shouldComponentUpdate(nextProps) {
        if (nextProps.resetRotate) {
            this.cube.rotation.x = 0;
            this.cube.rotation.y = 0;
            this.cube.rotation.z = 0;
            this.axes.rotation.x = 0;
            this.axes.rotation.y = 0;
            this.axes.rotation.z = 0;
            this.controls.reset();
            this.camera.zoom = 1;
        }

        if (nextProps.zoomIn) {
            this.camera.zoom *= 1.05;
            this.camera.updateProjectionMatrix();
        }

        if (nextProps.zoomOut) {
            this.camera.zoom /= 1.05;
            this.camera.updateProjectionMatrix();
        }

        return true;
    }

    autoRotate() {
        this.cube.rotation.x += 0.01;
        this.cube.rotation.y += 0.01;
        this.cube.rotation.y += 0.00;

        this.axes.rotation.x += 0.01;
        this.axes.rotation.y += 0.01;
        this.axes.rotation.z += 0.00;
    }

    animate() {
        this.controls.update();
        this.renderScene();

        if (this.props.viewerRotate)
            this.autoRotate();

        this.scene.getObjectByName("boundingBox").visible = this.props.boundingBox;
        this.scene.getObjectByName("axesHelper").visible = this.props.axes;

        this.frameId = window.requestAnimationFrame(this.animate)
    }

    renderScene() {
        this.renderer.render(this.scene, this.camera)
    }

    render() {
        return (
            <div className="renderer" ref={(mount) => {
                this.mount = mount
            }}/>
        )
    }
}


export default App;
