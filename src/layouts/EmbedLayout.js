import React from 'react';
import { Layout } from '@newrelic/gatsby-theme-newrelic';
import PropTypes from 'prop-types';
import { css, Global } from '@emotion/react';

const EmbedLayout = ({ children }) => {
  return (
    <>
      <meta name="robots" content="noindex" />
      <Global
        styles={css`
          body {
            background-color: var(--secondary-background-color);
          }
        `}
      />
      <Layout.Main
        css={css`
          min-height: 100vh;
        `}
      >
        {children}
      </Layout.Main>
    </>
  );
};

EmbedLayout.propTypes = {
  children: PropTypes.node,
};

export default EmbedLayout;
