module.exports = (state, emitter) => {
  (state.totalTrains = 1),
    emitter.on('DOMContentLoaded', function() {
      emitter.on('clicks:add', function(count) {
        state.totalTrains += count;
        emitter.emit(state.events.RENDER);
      });

      emitter.on('clicks:remove', function(count) {
        state.totalTrains -= count;
        emitter.emit(state.events.RENDER);
      });
    });
};
