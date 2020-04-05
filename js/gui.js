var options = {
    linear: {
        x: 0,
        y: 0,
        z: 0,
        resetPos: function() {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        },
    },
    angular: {
        phid: 0,
        thetad: 0,
        psid: 0,
        resetAttRate: function() {
            this.phid = 0;
            this.thetad = 0;
            this.psid = 0;
        },
        p: 0,
        q: 0,
        r: 0,
        resetBodyRate: function() {
            this.p = 0;
            this.q = 0;
            this.r = 0;
        },
    }
};

// DAT GUI
var gui = new dat.GUI();

// Linear properties
var linearProp = gui.addFolder('Linear');
// Linear position
linearProp.add(options.linear, 'x', -50, 50).name('\\(x\\)').listen();
linearProp.add(options.linear, 'y', -50, 50).name('\\(y\\)').listen();
linearProp.add(options.linear, 'z', -50, 50).name('\\(z\\)').listen();
linearProp.add(options.linear, 'resetPos').name('Reset position');
linearProp.open();
// Angular velocity
var angularProp = gui.addFolder('Angular');
angularProp.add(options.angular, 'phid', -10, 10, 0.5).name('\\(\\dot{\\phi}\\)').listen();
angularProp.add(options.angular, 'thetad', -10, 10, 0.5).name('\\(\\dot{\\theta}\\)').listen();
angularProp.add(options.angular, 'psid', -10, 10, 0.5).name('\\(\\dot{\\psi}\\)').listen();
angularProp.add(options.angular, 'resetAttRate').name('Reset attitude rate');
angularProp.add(options.angular, 'p', -10, 10, 0.5).name('\\(p\\)').listen();
angularProp.add(options.angular, 'q', -10, 10, 0.5).name('\\(q\\)').listen();
angularProp.add(options.angular, 'r', -10, 10, 0.5).name('\\(r\\)').listen();
angularProp.add(options.angular, 'resetBodyRate').name('Reset body rate');
angularProp.open();