AFRAME.registerComponent("car-model", {
    schema: {
      modelRef: { type: "string", default: "./car/scene.gltf" },
      rotY:{type:"number" ,default:1}
    },
    tick: function() {
      this.el.setAttribute("gltf-model", this.data.modelRef);
      var position = { x: 0, y: 10, z: 80 };
    //   var rotation = { x: 0, y: -100, z: 0 };
      this.data.rotY-=0.05
      var rot=this.el.getAttribute("rotation")
      rot.y=this.data.rotY
      var scale={x:0.5,y:0.5,z:0.5}
      this.el.setAttribute("position", position);
      this.el.setAttribute("rotation", {x:rot.x,y:rot.y,z:rot.z});
      this.el.setAttribute("scale", scale);
    }
  });