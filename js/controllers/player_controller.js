App.PlayerController = Ember.ObjectController.extend({
  actions: {
    addShot: function(points, player) {
      var shot = this.store.createRecord('shot', {
        scored: points
      });
      shot.save;
      player.get('shots').pushObject(shot);
    }
  }
});
