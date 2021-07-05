import React from 'react';

import './styles.css';
import { Title, Text } from '../../atoms';
import { SemesterFilter } from '../../molecules';
import { Section } from '../../organisms';
import { Layout } from '../../templates';

const BolsasFavoritas = () => {

    return (
        <Layout>
            <Section className="bolsas-favoritas">
                <Title className="bolsas-favoritas__title">
                    Bolsas favoritas
                </Title>
                <Text className="bolsas-favoritas__description">
                    Adicione bolsas de cursos e faculdades do
                    seu interesse e receba atualizações com as
                    melhores ofertas disponíveis.
                </Text>
                <SemesterFilter className="bolsas-favoritas__filter" />
            </Section>
        </Layout>
    );
}

export default BolsasFavoritas;