module.exports = {

  // run docker containers if false containers with image attribute will not be run
  runDocker: true,

  // proxy settings - one of docker | process | all | none
  proxy: 'none',

  // if true tail running process to the shell by default
  tail: false,

  // if true monitor running processes for changes by default
  monitor: true,

  // exclude these patterns from the monitor
  exclude: /node_modules|\.git|\.log/mgi,

  // override section. Allows the default build, run and debug commands
  // to be overriden on a service by service basis. These commands are
  // normally generated by inspecting the Dockerfile for a service
  /*
  overrides: {
    service1: { build: 'sh build.sh' }
  }
  */
};
