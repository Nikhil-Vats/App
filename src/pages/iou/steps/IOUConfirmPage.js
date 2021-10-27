
import React from 'react';
import PropTypes from 'prop-types';
import IOUConfirmationList from '../../../components/IOUConfirmationList';
import CONST from '../../../CONST';

const propTypes = {
    /** Callback to inform parent modal of success */
    onConfirm: PropTypes.func.isRequired,

    /** Callback to update comment from IOUModal */
    onUpdateComment: PropTypes.func,

    /** Callback to update payment type in IOUModal */
    /* eslint-disable-next-line react/no-unused-prop-types */
    onUpdatePaymentType: PropTypes.func.isRequired,

    /** Comment value from IOUModal */
    comment: PropTypes.string,

    /** Should we request a single or multiple participant selection from user */
    hasMultipleParticipants: PropTypes.bool.isRequired,

    /** IOU amount */
    iouAmount: PropTypes.string.isRequired,

    localCurrencyCode: PropTypes.string,

    /** Menu options to display */
    /** [
     *   {text: 'I\'ll settle up elsewhere', paymentType: 'Elsewhere', icon: Cash},
     *   {text: 'Pay with Expensify', paymentType: 'Expensify', icon: Wallet},
     *   {text: 'PayPal', paymentType: 'PayPal.me', icon: PayPal},
     *   {text: 'Venmo', paymentType: 'Venmo', icon: Venmo}
     *  ]
     * */
    confirmationButtonOptions: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        paymentType: PropTypes.string,
        icon: PropTypes.elementType,
        iconWidth: PropTypes.number,
        iconHeight: PropTypes.number,
        iconDescription: PropTypes.string,
    })).isRequired,

    /** Selected participants from IOUMOdal with login */
    participants: PropTypes.arrayOf(PropTypes.shape({
        login: PropTypes.string.isRequired,
        alternateText: PropTypes.string,
        hasDraftComment: PropTypes.bool,
        icons: PropTypes.arrayOf(PropTypes.string),
        searchText: PropTypes.string,
        text: PropTypes.string,
        keyForList: PropTypes.string,
        isPinned: PropTypes.bool,
        isUnread: PropTypes.bool,
        reportID: PropTypes.number,
        participantsList: PropTypes.arrayOf(PropTypes.object),
        payPalMeAddress: PropTypes.string,
        phoneNumber: PropTypes.string,
    })).isRequired,

    /** IOU type */
    iouType: PropTypes.string,

    /** Whether this is an IOU split and belongs to a group report */
    isGroupSplit: PropTypes.bool.isRequired,
};

const defaultProps = {
    onUpdateComment: null,
    comment: '',
    iouType: CONST.IOU.IOU_TYPE.REQUEST,
    localCurrencyCode: CONST.CURRENCY.USD,
};

const IOUConfirmPage = props => (
    <IOUConfirmationList
        hasMultipleParticipants={props.hasMultipleParticipants}
        participants={props.participants}
        comment={props.comment}
        onUpdateComment={props.onUpdateComment}
        iouAmount={props.iouAmount}
        onConfirm={props.onConfirm}
        iouType={props.iouType}
        localCurrencyCode={props.localCurrencyCode}
        onUpdatePaymentType={props.onUpdatePaymentType}
        confirmationButtonOptions={props.confirmationButtonOptions}
        isGroupSplit={props.isGroupSplit}
    />
);


IOUConfirmPage.displayName = 'IOUConfirmPage';
IOUConfirmPage.propTypes = propTypes;
IOUConfirmPage.defaultProps = defaultProps;

export default IOUConfirmPage;
