module.exports = function GhilliegladeTeleport(mod) {
	
	const { Vec3 } = require('tera-data-parser').types;
	
	let newLoc = new Vec3(52227.5078125, 117334.3125, 4386);
	
	mod.hook('S_LOAD_TOPO', 3, (event) => {
		if(event.zone === 9713) {
			event.loc = newLoc;
			mod.hookOnce('S_SPAWN_ME', 3, ghillieTp);
			return true;
		}
	});
	
	function ghillieTp(event) {
		event.loc = newLoc;
		event.w = 1.4964941323816858;
		return true;
	}
}