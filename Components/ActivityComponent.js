class Activity extends HTMLElement {
    constructor() {
        const html = ` <div class="card" id=act>
        <div class="card-header">
            <h4>My Activities</h4>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-2">
                    <i class="fa fa-5x fa-road"></i>
                </div>
                <div class="col-md-10">
                    <p> Analysis and infrastructure creation in major national projects</p>
                    <p>Senior Programmer and Technical Manager in To upgrade EPG-Inspection System Project</p>
                    <p>Head of programmers and programmers in Iran-Parcel Project</p>
                    <p>Supervisor and senior programmer in the first-health project</p>
                    <p>Development of the second phase of the AbbeyTutors International Project</p>
                    <p> Creating and developing matin network projects, fruiting attero, chandsoo, handdokht,
                        parsian chemistry, etc.</p>
                </div>
            </div>
        </div>
        <div class="row col-md-12">
            <div class="seeMore">
                <a title="IrGoods_Developers" class="seeMoreLink" href="https://irgoods.com/group-members-2">Introduce IrGoods Team</a>
            </div>
        </div>
        <div class="card-footer ">
            Update a few minutes
        </div>
    </div>
`;
        super();
        // Create a shadow root
        var shadow = this.attachShadow({ mode: 'open' });
        var h1tag = document.createElement("div");
        h1tag.innerHTML = html;
        shadow.appendChild(h1tag);
    }
}

export default Activity;