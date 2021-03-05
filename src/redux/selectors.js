import { Component } from 'react';
import { connect } from 'react-redux';

const roles = ['admin', 'manager', 'guest'];
const rolesWithEditRights = ['admin', 'manager'];

export const isLoggedIn = (state) => Boolean(state.user.session.token);
export const hasRights = (state) => {
  const { role } = state.user;
  rolesWithEditRights.includes(role);
};

const mapStateToProps = (state) => ({
  hasRights: hasRights(state),
});

connect(mapStateToProps)(Component);
