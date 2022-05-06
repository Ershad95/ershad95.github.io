class Nuget extends HTMLElement {
    constructor() {
        const html = ` <div class="card" id="nuget">
        <div class="card-header">
            <h4>Ershad's Nuget</h4>
        </div>
        <div class="card-body">
            <h5 title="Nuget Of ErshadRaoufi">
                <a title="Nuget Ershad.Alert" href="https://www.nuget.org/packages/Ershad.Blazor.Alert/">
                    <p>Ershad.Blazor.Alert
            </h5>
            </a>
            <div class="row">
                <div class="col-md-2">
                    <a title="Nuget Ershad.Alert" href="https://www.nuget.org/packages/Ershad.Blazor.Alert/">
                        <img width="100" title="Ershad Raoufi Nuget" src="/nuget.png"
                            alt="Ershad Raoufi Nuget" />
                    </a>
                </div>
                <div class="col-md-5">
                    <ul>
                        <p>Show Message in Blazor with My Nuget Component,this Nuget use <a href="https://dotnet.microsoft.com/en-us/download/dotnet/6.0">.net 6</a>  for render and
                            compile of sourceCode</p>
                        <a title="Nuget Ershad.Alert"
                            href="https://www.nuget.org/packages/Ershad.Blazor.Alert/"><i
                                class="fa fa-link"></i>
                            Ershad.Blazor.Alert Nuget</a>
                        <hr>
                        <a title="Github Ershad.Blazor.Alert"
                            href="https://www.nuget.org/packages/Ershad.Blazor.Alert/"><i
                                class="fa fa-link"></i>
                            Ershad.Blazor.Alert Github</a>
                    </ul>
                </div>
                <div class="col-md-5">
                    <p>Features of Component</p>
                    <ul>
                        <li>Easy install and Easy Use in your Source Code</li>
                        <li>you can use Alert type for declare type of Message</li>
                        <li>you can use Custom Header,Footer and Body Message</li>
                        <li>You can Show your Own Ui in Template of Message</li>
                        <li>You can Set Animation for Show the Message</li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="card-footer">
            Update a few minutes
        </div>
    </div>`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        shadow.appendChild(h1tag);
    }
}

export default Nuget;