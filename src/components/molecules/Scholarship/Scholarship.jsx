import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';
import { FaRegStar, FaStarHalfAlt, FaStar } from 'react-icons/fa';
import { Card, Button } from '../../atoms';

import { toLocaleCurrency } from '../../../utils/currency';
import { useScholarshipContext } from '../../../context/ScholarshipContext';

const Scholarship = ({ className, scholarship }) => {
    const { remove } = useScholarshipContext();

    const handleRemove = () => {
        remove(scholarship);
    };

    // Non-precision
    const renderStarsByScore = (score) => {
        const starsFilled = parseInt(score);
        const starsUnfilled = parseInt(5 - score);
        const starHalf = score % 1;

        return (
            <>
                {[...Array(starsFilled)].map((n, i) => <FaStar key={i} />)}
                {starHalf ? <FaStarHalfAlt /> : null}
                {[...Array(starsUnfilled)].map((n, i) => <FaRegStar key={i} />)}
            </>
        );
    }

    return (
        <Card className={`scholarship-list__item ${className ?? ''}`}>
            <div className="scholarship-header">
                <img
                    className="scholarship-header__logo"
                    src={scholarship.university.logo_url}
                    alt="Logo da faculdade"
                    title="Logo da faculdade"
                />
                <h5 className="scholarship-header__university">
                    {scholarship.university.name}
                </h5>

                <p className="scholarship-header__course">
                    {scholarship.course.name}
                </p>

                <div className="scholarship-header__score">
                    <span>{scholarship.university.score}</span>
                    {renderStarsByScore(scholarship.university.score)}
                </div>
            </div>

            <div className="scholarship-details">
                <p className="scholarship-details__kind">
                    {`${scholarship.course.kind} • ${scholarship.course.shift}`}
                </p>
                <p className="scholarship-details__start-date">
                    {`Início das aulas em: ${scholarship.start_date}`}
                </p>
            </div>

            {scholarship.enabled && (
                <div className="scholarship-price">
                    <p>Mensalidade com o Quero Bolsa:</p>
                    <p className="scholarship-price__full">
                        {toLocaleCurrency(scholarship.full_price)}
                    </p>
                    <p className="scholarship-price__with-discount">
                        {toLocaleCurrency(scholarship.price_with_discount)}
                        <span>{'  '}/mês</span>
                    </p>
                </div>
            )}

            {!scholarship.enabled && (
                <div className="scholarship-message">
                    <p>Bolsa indisponível.</p>
                    <p className="scholarship-message__description">
                        Entre em contato com nosso atendimento para
                        saber mais.
                    </p>
                </div>
            )}

            <div className="scholarship-actions">
                <Button
                    className="scholarship-actions__remove"
                    onClick={handleRemove}
                >
                    Excluir
                </Button>
                {scholarship.enabled && (
                    <Button className="scholarship-actions__view">
                        Ver oferta
                    </Button>
                )}
                {!scholarship.enabled && (
                    <Button
                        className="scholarship-actions__view scholarship-actions__view--disabled"
                        disabled
                    >
                        Indisponível
                    </Button>
                )}
            </div>
        </Card>
    );
}

Scholarship.propTypes = {
    className: PropTypes.string
};

export default React.memo(Scholarship);