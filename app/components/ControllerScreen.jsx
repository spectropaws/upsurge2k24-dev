import React from 'react';

export default function ControllerScreen() {
    return (
        <div className='w-full h-full rounded-xl bg-black'>
            <iframe src="/smackathon" className="w-full h-full rounded-xl transform" style={{ transformOrigin: "center" }} />
        </div>
    );
}
