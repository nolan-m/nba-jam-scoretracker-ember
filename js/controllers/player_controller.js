App.PlayerController = Ember.ObjectController.extend({
  actions: {
    addShot: function(points, player) {
      var shot = this.store.createRecord('shot', {
        scored: points
      });
      shot.save;
      var total = player.get('total_scored');
      total += points;
      player.setProperties({ total_scored: total});
      player.get('shots').pushObject(shot);
    }
  }
});
