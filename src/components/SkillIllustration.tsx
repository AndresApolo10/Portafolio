export default function SkillIllustration({ kind }: { kind: 'frontend' | 'backend' | 'cloud' }) {
  return <svg viewBox="0 0 112 88" width="112" height="88" fill="none" aria-hidden="true" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="56" cy="75" rx="44" ry="7" fill="#18394e" opacity=".06" />
    {kind === 'frontend' ? <>
      <rect x="9" y="12" width="75" height="55" rx="7" fill="#fff" stroke="#345c70" strokeWidth="1.7" />
      <path d="M10 25h73" stroke="#d5e4e5" strokeWidth="1.5" />
      <circle cx="18" cy="19" r="2" fill="#c8da9d" /><circle cx="25" cy="19" r="2" fill="#a7cbd7" /><circle cx="32" cy="19" r="2" fill="#ddc9b2" />
      <rect x="18" y="34" width="25" height="24" rx="4" fill="#e9f1ed" /><path d="m29 40-5 6 5 6m5-12 5 6-5 6" stroke="#5e845b" strokeWidth="1.5" />
      <path d="M51 36h23M51 43h17M51 50h20M51 57h11" stroke="#c0d3dd" strokeWidth="3" />
      <rect x="72" y="34" width="27" height="44" rx="6" fill="#fff" stroke="#345c70" strokeWidth="1.7" />
      <path d="M82 40h7M83 72h5" stroke="#92aeb9" strokeWidth="2" />
      <rect x="77" y="47" width="17" height="16" rx="3" fill="#dceaf4" /><path d="m81 55 3 3 6-7" stroke="#688a9e" strokeWidth="1.8" />
    </> : kind === 'backend' ? <>
      <path d="M55 35h16m-16 21h16" stroke="#8aa9a5" strokeWidth="1.5" strokeDasharray="3 4" />
      {[18,39,60].map((y,i)=><g key={y}><rect x="10" y={y} width="48" height="16" rx="4" fill="#fff" stroke="#345c70" strokeWidth="1.5" /><circle cx="19" cy={y+8} r="2.3" fill={i===1?'#a2c6da':'#a9c481'} /><path d={`M28 ${y+8}h21`} stroke="#c0d2d8" strokeWidth="2" /></g>)}
      <path d="M72 25v38c0 6 27 6 27 0V25" fill="#e3ece0" stroke="#557452" strokeWidth="1.5" />
      <ellipse cx="85.5" cy="25" rx="13.5" ry="6" fill="#f7faf4" stroke="#557452" strokeWidth="1.5" />
      <path d="M72 39c0 6 27 6 27 0M72 52c0 6 27 6 27 0" stroke="#7d9a75" strokeWidth="1.4" />
      <circle cx="85" cy="71" r="10" fill="#d6e5c5" stroke="#fff" strokeWidth="3" /><path d="m81 71 3 3 5-6" stroke="#557452" strokeWidth="1.6" />
    </> : <>
      <path d="M56 51v13m-29 0h58M27 64v8m58-8v8m-29-8v8" stroke="#97b0b8" strokeWidth="1.5" strokeDasharray="3 3" />
      <path d="M33 52c-10 0-15-6-15-13s6-13 13-13c2-11 10-16 20-14 6-9 25-3 26 9 11-1 18 7 18 16s-6 15-16 15H33Z" fill="#e6eff5" stroke="#345c70" strokeWidth="1.7" />
      <path d="m54 24 12 5v10c0 7-7 11-12 13-5-2-12-6-12-13V29l12-5Z" fill="#fff" stroke="#74965f" strokeWidth="1.5" /><path d="m48 37 4 4 8-9" stroke="#74965f" strokeWidth="2" />
      {[27,56,85].map((x,i)=><rect key={x} x={x-6} y="68" width="12" height="12" rx="3" fill={i===1?'#c9ddac':'#d5e5eb'} stroke={i===1?'#82a364':'#8babb9'} strokeWidth="1.2" />)}
      <path d="M85 10v6m-3-3h6" stroke="#d4b47b" strokeWidth="1.6" />
    </>}
  </svg>;
}
