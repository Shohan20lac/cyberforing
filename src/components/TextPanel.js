import { React, useState } from 'react';

function TextPanel (props) {

    return (
        <div className = "text-panel">
            <h1> Against Evolving Threats </h1>

            <p> Get a clear picture of your organization's security posture and how prepared you are against evolving cyber threats before malicious entities, and apply customized recommendations to improve your security program.</p>

            <button
                className={`navbutton pressed sharp`}
            >
                Identify Cyber Risks Today
            </button>
        </div>
    );
}

export default TextPanel;