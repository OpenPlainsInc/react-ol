import type { Meta, StoryObj } from '@storybook/react';

import Map from '../Map';
import TileLayer from '../Layers/TileLayer';
import osmSource from '../Sources/osm';
import Controls from './Controls';

import { FullScreenControl } from './FullScreenControl';

const meta: Meta<typeof FullScreenControl> = {
    title: 'Map/Controls/FullScreenControl',
    component: FullScreenControl,
    tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof FullScreenControl>;

export const FullScreen: Story = {
    render: () => <Map zoom={1} center={[0, 0]}>
        <TileLayer
            source={osmSource()}
        />
        <Controls>
            <FullScreenControl/>
        </Controls>
    </Map>
}

