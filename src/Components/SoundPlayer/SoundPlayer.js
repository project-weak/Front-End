import React from 'react';

function SoundPlayer(props) {
    
    const src=props.sound;
    return (
        <div style={{ height: '228px', width: '100%' }}>
        <iframe src={src} style={{ display: 'block', borderRadius: '6px', border: 'none', height: '204px', width: '100%' }}></iframe>
        {/* <a href='https://audio.com/muath-mhawich' style={{ textAlign: 'center', display: 'block', color: '#A4ABB6', fontSize: '12px', fontFamily: 'sans-serif', lineHeight: '16px', marginTop: '8px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>@muath-mhawich</a> */}
    </div>
    );
}

export default SoundPlayer;