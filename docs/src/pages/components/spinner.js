import React from 'react';
import { Row, Col } from 'oah-ui';
import SEO from '../../components/SEO';
import Switch from '../../components/Switch';
import Overview from '../../mdx/spinner/overview.mdx';
import ApiTable from '../../components/ApiTable';
import StyleTable from '../../components/StyleTable';
import { spinnerProps } from '../../mdx/spinner/ApiArray';

export default function SpinnerPage() {
  return (
    <Row>
      <SEO
        title="Spinner Component"
        keywords={['OAH', 'application', 'react']}
      />
      <Col xs={12}>
        <Switch title="Spinner Component">
          <Overview />
          <ApiTable name="Spinner" props={spinnerProps} />
          <StyleTable keys={['spinner']} />
        </Switch>
      </Col>
    </Row>
  );
}
