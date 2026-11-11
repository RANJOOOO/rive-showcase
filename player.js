// Plays one Rive file full-bleed in a 4:3 frame, with its view model auto-bound.
(function () {
  const el = document.getElementById('stage');
  const file = el.dataset.riv;
  const canvas = document.createElement('canvas');
  el.appendChild(canvas);
  const r = new rive.Rive({
    src: file,
    canvas,
    autoplay: true,
    autoBind: true,
    stateMachine: el.dataset.machine || undefined,
    layout: new rive.Layout({ fit: rive.Fit.Contain, alignment: rive.Alignment.Center }),
    onLoad: () => r.resizeDrawingSurfaceToCanvas(),
    onLoadError: (e) => { el.dataset.error = String(e); console.error('rive load error', e); },
  });
  window.__rive = r;
  window.addEventListener('resize', () => r.resizeDrawingSurfaceToCanvas());
})();
