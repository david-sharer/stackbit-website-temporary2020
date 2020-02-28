import React from 'react';
import _ from 'lodash';

import {getPages, Link, safePrefix, markdownify} from '../utils';

export default class Spotlights extends React.Component {
    pagesChain = null;
    tagElement = null;

    constructor(props) {
        super(props);
        this.pagesChain = _.chain(getPages(this.props.pageContext.pages, '/'))
            .filter(['frontmatter.home_spotlights.enabled', true])
            .orderBy( 'frontmatter.home_spotlights.weight');
        
        if (props.section.spotlight_tag_filter) {
            this.pagesChain = this.pagesChain.filter(['frontmatter.home_spotlights.filter_tag', props.section.spotlight_tag_filter]);
        }
    }

    render() {
        return (
            <section id={this.props.section.section_id} className={'wrapper ' + this.props.section.background_style + ' spotlights'}>
                {this.pagesChain.map((spotlight_page, spotlight_page_idx) => (
                    <section key={spotlight_page_idx}>
                        {spotlight_page.frontmatter.home_spotlights.home_img && 
                            <Link to={safePrefix(spotlight_page.url)} className="image"><img src={safePrefix(spotlight_page.frontmatter.home_spotlights.home_img.path)} alt="" data-position={spotlight_page.frontmatter.home_spotlights.home_img.data_position} /></Link>
                        }
                        <div className="content">
                            <div className="inner">
                                <h2>
                                    {spotlight_page.frontmatter.title}
                                    {spotlight_page.frontmatter.home_spotlights.tag &&
                                        <span style={{"font-size": "1rem"}} className={"tag icon " + spotlight_page.frontmatter.home_spotlights.tag.icon} title={spotlight_page.frontmatter.home_spotlights.tag.title}> {spotlight_page.frontmatter.home_spotlights.tag.text}</span>
                                    }
                                </h2>
                                {markdownify(spotlight_page.frontmatter.home_spotlights.excerpt)}
                                <ul className="actions">
                                    <li><Link to={safePrefix(spotlight_page.url)} className="button">Learn more</Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                )).value()}
            </section>
        );
    }
}
