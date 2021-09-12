function addDataModel(){
   /*
    //Add Kingdom actor type
    game.system.entityTypes.Actor.push("kingdom");
    game.system.template.Actor.types.push("kingdom");

    CONFIG.Actor.sheetClasses.kingdom = CONFIG.Actor.sheetClasses.npc;
    game.system.template.Actor.kingdom = game.system.template.Actor.npc;
    game.system.model.Actor.kingdom = game.system.model.Actor.npc;
*/


}


/**
 * Extend the basic ActorSheet class to do all the PF things!
 * This sheet is an Abstract layer which is not used.
 *
 * @type {ActorSheet}
 */
class ActorSheetKingdom extends ActorSheet {
    constructor(...args) {
      super(...args);
  
      /**
       * The scroll position on the active tab
       *
       * @type {number}
       */
      this._scrollTab = {};
      this._initialTab = {};
      
    }
    
  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   *
   * @type {string}
   */
  //get template() {
   // if (!game.user.isGM && this.actor.limited) return "./templates/actors/limited-sheet.hbs";
    //return "./templates/actors/kingdom-sheet.hbs";
  //}
  async getData() {
    const data = await super.getData();

  return data;
  }
}


/**
 * Extend the basic ActorSheet class to do all the PF things!
 * This sheet is an Abstract layer which is not used.
 *
 * @type {ActorSheetKingdom}
 */
class ActorSheetKingdomBuilding extends ActorSheetKingdom {
    constructor(...args) {
      super(...args);
  
      /**
       * The scroll position on the active tab
       *
       * @type {number}
       */
      this._scrollTab = {};
      this._initialTab = {};
    }
    
  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */
  static get defaultOptions() {
    return mergeObject(super.defaultOptions, {
      width: 580,
      classes: ["pf1", "sheet", "actor"],
      scrollY: [".tab.details", ".buff-flags", '.tab[data-tab="changes"]'],
      dragDrop: [
        {
          dragSelector: "li.conditional",
          dropSelector: 'div[data-tab="conditionals"]',
        },
      ],
    });
  }
  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   *
   * @type {string}
   */
  get template() {
    if (!game.user.isGM && this.actor.limited) return "modules/kingdom-mgmt/templates/actors/limited-sheet.hbs";
    return "modules/kingdom-mgmt/templates/actors/building.hbs";
  }
  async getData() {
    const data = await super.getData();
 
    data.kingdom = this.actor.data.data.kingdom;
  
  return data;
  }
}


/**
 * Extend the basic ActorSheet class to do all the PF things!
 * This sheet is an Abstract layer which is not used.
 *
 * @type {ActorSheetKingdom}
 */
class ActorSheetKingdomSettlement extends ActorSheetKingdom {
    constructor(...args) {
      super(...args);
  
      /**
       * The scroll position on the active tab
       *
       * @type {number}
       */
      this._scrollTab = {};
      this._initialTab = {};
      
    }
    
  /* -------------------------------------------- */
  /*  Rendering                                   */
  /* -------------------------------------------- */

  /**
   * Get the correct HTML template path to use for rendering this particular sheet
   *
   * @type {string}
   */
  //get template() {
   // if (!game.user.isGM && this.actor.limited) return "./templates/actors/limited-sheet.hbs";
    //return "./templates/actors/kingdom-sheet.hbs";
  //}
  async getData() {
    const data = await super.getData();

  return data;
  }
}

//After initialization
Hooks.on("ready", function() {
    Actors.registerSheet("PF1", ActorSheetKingdom, { types: ["npc"], makeDefault: false });
    Actors.registerSheet("PF1", ActorSheetKingdomBuilding, { types: ["npc"], makeDefault: false });
    Actors.registerSheet("PF1", ActorSheetKingdomSettlement, { types: ["npc"], makeDefault: false });
    addDataModel();
});