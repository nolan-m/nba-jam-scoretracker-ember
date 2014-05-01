App.TeamsController = Ember.ArrayController.extend({
  actions: {
    addTeam: function() {
      var name = this.get('teamName');
      if (!name.trim()) { return; }
      var n_team = this.store.createRecord('team', {
        name: name
      });
      this.set('teamName', '');
      n_team.save;
      return n_team;
    }
  }
});
