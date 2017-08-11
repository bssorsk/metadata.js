/**
 * ### Поле ввода текстовых данных
 *
 * @module FieldText
 *
 */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

export default class FieldText extends Component {

  static propTypes = {
    _obj: PropTypes.object.isRequired,
    _fld: PropTypes.string.isRequired,
    _meta: PropTypes.object.isRequired,
    handleValueChange: PropTypes.func,
    read_only: PropTypes.bool,          // поле только для чтения
  };

  onChange = (event, newValue) => {
    const {_obj, _fld, handleValueChange} = this.props;
    _obj[_fld] = newValue;
    if (handleValueChange) {
      handleValueChange(newValue);
    }
  };

  render() {
    const {onChange, props} = this;
    const {_obj, _fld, _meta, classes, read_only} = props;

    return (
      <TextField
        className={classes.textField}
        disabled={read_only}
        label={_meta.synonym}
        InputProps={{ placeholder: _fld }}
        name={_fld}
        fullWidth={true}
        defaultValue={_obj[_fld]}
        title={_meta.tooltip || _meta.synonym}
        onChange={onChange}
      />
    );
  }
}