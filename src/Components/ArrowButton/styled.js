import styled from 'styled-components';

const ArrowButtonBase = styled.button`
    padding: 0;
    border: none;

    cursor: pointer;
    background: ${({ theme }) => theme.color.black};

    ${({ theme }) => theme.shadow[0]};
    transition: transform 0.08s ease-in-out, box-shadow 0.08s ease-in-out;
    &:active {
        box-shadow: none;
        transform: translateY(2px);
    }

    position: relative;
    &:before {
        display: block;
        content: '';

        width: 0;
        height: 0;

        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;

        position: absolute;
    }

    ${({ theme }) => theme.media.above.m} {
        &:before {
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
        }
    }
`;

const ArrowLeft = styled(ArrowButtonBase)`
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;

    &:before {
        border-right: 10px solid ${({ theme }) => theme.color.grey[4]};
        border-left: 0;
        top: 9px;
        left: 10px;
    }

    ${({ theme }) => theme.media.above.m} {
        &:before {
            border-left: 0;
            border-right: 13px solid ${({ theme }) => theme.color.grey[4]};
            top: 11px;
            left: 12px;
        }
    }
`;

const ArrowRight = styled(ArrowButtonBase)`
    border-bottom-right-radius: 10px;
    border-top-right-radius: 10px;
    &:before {
        border-left: 10px solid ${({ theme }) => theme.color.grey[4]};
        border-right: 0;
        top: 9px;
        right: 10px;
    }

    ${({ theme }) => theme.media.above.m} {
        &:before {
            border-left: 13px solid ${({ theme }) => theme.color.grey[4]};
            border-right: 0;
            top: 11px;
            right: 12px;
        }
    }
`;

const ArrowTop = styled(ArrowButtonBase)`
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;

    &:before {
        border-bottom: 10px solid ${({ theme }) => theme.color.grey[4]};
        border-top: 0;
        left: 9px;
        top: 10px;
    }

    ${({ theme }) => theme.media.above.m} {
        &:before {
            border-bottom: 13px solid ${({ theme }) => theme.color.grey[4]};
            border-top: 0;
            left: 11px;
            top: 12px;
        }
    }
`;

const ArrowBottom = styled(ArrowButtonBase)`
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &:before {
        border-top: 10px solid ${({ theme }) => theme.color.grey[4]};
        border-bottom: 0;
        left: 9px;
        bottom: 10px;
    }

    ${({ theme }) => theme.media.above.m} {
        &:before {
            border-top: 13px solid ${({ theme }) => theme.color.grey[4]};
            border-bottom: 0;
            left: 11px;
            bottom: 12px;
        }
    }
`;

export { ArrowRight, ArrowLeft, ArrowTop, ArrowBottom };
