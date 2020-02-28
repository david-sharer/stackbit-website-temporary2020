import React from 'react';
import _ from 'lodash';

import {getPages, Link, safePrefix, markdownify} from '../utils';

export default class Spotlights extends React.Component {
    render() {
        return (
            <section id={this.props.section.section_id} className={'wrapper ' + this.props.section.background_style + ' spotlights spotlights-wip'}>
                {_.chain(getPages(this.props.pageContext.pages, '/'))
                    .filter(['frontmatter.home_spotlights_wip.enabled', true])
                    .orderBy( 'frontmatter.home_spotlights_wip.weight')
                    .map((spotlight_page, spotlight_page_idx) => (
                    <section key={spotlight_page_idx}>
                        {spotlight_page.frontmatter.home_spotlights_wip.home_img && 
                            <Link to={safePrefix(spotlight_page.url)} className="image"><img src={safePrefix(spotlight_page.frontmatter.home_spotlights_wip.home_img.path)} alt="" data-position={spotlight_page.frontmatter.home_spotlights_wip.home_img.data_position} /><span className="icon fa-tasks" title="Work in Progress"> WIP</span></Link>
                        }
                        <div className="content">
                            <div className="inner">
                                <h2>{spotlight_page.frontmatter.title}</h2>
                                {markdownify(spotlight_page.frontmatter.home_spotlights_wip.excerpt)}
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
