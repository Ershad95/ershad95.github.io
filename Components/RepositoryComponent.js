class Repository extends HTMLElement {
    constructor() {
        const html = ` <div class="card" id=repo title="Repositories Of ErshadRaoufi">
        <div class="card-header">
            <h4>Ershad's GitHub Repositores</h4>
        </div>
        <div class="card-body">
            <h5 class="card-title">My Source Code in Github</h5>
            <div class="row">
                <div class="col-md-2">
                    <i class="fa fa-5x fa-github"></i>
                </div>
                <div class="col-md-5">
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/Clash_Of_Clans_Bot"><i class="fa fa-link"></i>
                            Clash_Of_Clans_Bot</a>
                    </div>
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/ScopusApi"><i class="fa fa-link"></i>
                            Scopus_Api</a>
                    </div>
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/MessageBox"><i class="fa fa-link"></i> Custom
                            MessageBox for .Net</a>
                    </div>
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/TakeTaxiApp"><i class="fa fa-link"></i>
                            TakeTaxi_Android App</a>
                    </div>

                </div>
                <div class="col-md-5">
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/GuessNumber"><i class="fa fa-link"></i>
                            GuessNumber</a>
                    </div>
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/Scopus_App"><i class="fa fa-link"></i>
                            Scopus_Android_App</a>
                    </div>
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/Generate_StaticField_FontAwesome"> <i
                                class="fa fa-link"></i> Generate_StaticField_FontAwesome</a>
                    </div>
                    <div class="repoItem">
                        <a href="https://github.com/Ershad95/WaveMp3Player"><i class="fa fa-link"></i>
                            WaveMp3Player .Net App</a>
                    </div>
                    <div class="seeMore">
                        <a class="seeMoreLink" href="https://github.com/Ershad95?tab=repositories">
                            See More Repo

                        </a>
                    </div>
                </div>
            </div>

        </div>
        <div class="card-footer ">
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
export default Repository;